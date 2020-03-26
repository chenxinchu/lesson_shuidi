package main

import "fmt"

type Node struct {
	value int
	left  *Node
	right *Node
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil} // nil 为空 & 取地址
}

// 前序遍历 中 -> 左 -> 右
func (node *Node) preoTarv(n *Node) {
	if n == nil {
		return
	}
	fmt.Println(n.value, " ")
	node.preoTarv(n.left)
	node.preoTarv(n.right)
}

// 中序遍历 左 -> 中 -> 右
func (node *Node) midTarv(n *Node) {
	if n == nil {

		return
	}
	node.midTarv(n.left)
	fmt.Println(n.value, " ")
	node.midTarv(n.right)
}

// 后序遍历 左 -> 右 -> 中
func (node *Node) behindTarv(n *Node) {
	if n == nil {
		return
	}
	node.behindTarv(n.left)
	node.behindTarv(n.right)
	fmt.Println(n.value, " ")
}

func main() {
	root := CreateNode(5) // 根节点
	root.left = CreateNode(2)
	root.right = CreateNode(4)
	root.left.left = CreateNode(6)
	root.left.right = CreateNode(7)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)
	// fmt.Println(root.value)
	fmt.Println("前序遍历：")
	root.preoTarv(root)
	fmt.Println("中序遍历：")
	root.midTarv(root)
	fmt.Println("后序遍历：")
	root.behindTarv(root)
}
