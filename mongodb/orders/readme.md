1. mongodb 与 mysql 的区别
   - NOSQL 与 SQL
   - SQL 数据库三大范式 NOSQL 是 doc 型，有一定的数据冗余

mock orders

2. 作为 PC 后台，我们大都不关心 id，name 等，
   关注的是总数，季度销量，单品最佳...
3. 对于用户来说，查询最多的是订单

- 总销量
  单个销量:total \$sum

```bash
	db.orders.aggregate([
		{
		 $group:{    // 分组
     	 	_id:null,
     		total:{
        $sum:"$total"
     		}
  		}
 		}
 	]);
```

计算 `第一季度` `每个州` `销量`最多的`sku` 的第一名  
aggtegate 应用场景

- 第一季度 orderDate ISODate() $lt $gt
- 每个州 $state  分组的依据 $group state
- 销量 orderLines.sku $group 分组 $sum orderLines.qty 对数量求和
- sku 第一名 orderby

```bash
db.orders.aggregate([
	{
		$match:{  // 相当于where
			status:"completed",  // 已经完成的订单
 			orderDate:{
				$gte: ISODate("2019-01-01"),
				$lt: ISODate("2019-04-01")
			}
		}
	}, // 目前查出第一季度的所有交易订单
	{
		$unwind:"$orderLines"   展开orderLines 展开订单
	},
	{
		$group:{
    	_id:{
      	state:"$state",
       	sku:"$orderLines.sku"
     	},
		 	count:{
     		$sum:"$orderLines.qty"
   		}
		}
	},  // 得到每个州的sku和数量
	{
		$sort:{
			"_id.state":1,
			"count":-1
		}
	},  // 所有州按升序排列，sku数量按降序排列
	{
    $group:{
    	_id:"$_id.state",
    	sku:{
       	$first:"$_id.sku"
     	},
     	count:{
      	$first:"$count"
     	}
   	}
 	}   // 查出每个州sku销量第一
]);
```

- 统计每个 sku 在第一季度销量的件数 不算取消状态的订单， 按销售数量降序排序

```bash
db.orders.aggregate([
	{
		$match: {
			status: "completed",
			orderDate: {
				$gte: ISODate("2019-01-01"),
				$lt: ISODate("2019-04-01")
			} 
		}
	},
	{
		$unwind: "$orderLines"
	},
	{
		$group: {
			_id: {
				sku: "$orderLines.sku"
			},
			count: {
				$sum: "$orderLines.qty"
			}
		}
	},
	{
		$sort: {
			"count": -1
		}
	}
])
```
