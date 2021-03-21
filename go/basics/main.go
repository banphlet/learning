package main

import "fmt"

type User struct {
	Name string
	Pets []string
}

func (u *User) newPet() {
	u.Pets = append(u.Pets, "Lucy")
	fmt.Println(u)
}

func main() {
	u := &User{Name: "Anna", Pets: []string{"Bailey"}}
	u.newPet()
	fmt.Println(u)
	var age int = 20
	var sex string = "male"

	fmt.Printf("The person is %d years old and is a %s", age, sex)
}
