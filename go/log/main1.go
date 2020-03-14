package main

import (
	"fmt"
	"log"
)

type Car struct {
	Name  string
	Price int
	Seat  int
}

func main() {
	Tesla := Car{
		Name:  "Model3",
		Price: 340000,
		Seat:  5,
	}
	var Aodi = Car{Name: "Aodi A6", Price: 580000, Seat: 5}
	println("------this is fmt-------")
	fmt.Printf("The car you bought is %s ,the price is %d ,there are %d seats in the car\n", Tesla.Name, Tesla.Price, Tesla.Seat)
	println("------this is log-------")
	log.Printf("The car you bought is %s ,the price is %d ,there are %d seats in the car\n", Aodi.Name, Aodi.Price, Aodi.Seat)
	println("------this is SetFlsgs-------")
	log.SetFlags(log.Lshortfile | log.Ldate | log.Lmicroseconds)
	log.Printf("The car you bought is %s ,the price is %d ,there are %d seats in the car\n", Aodi.Name, Aodi.Price, Aodi.Seat)

}
