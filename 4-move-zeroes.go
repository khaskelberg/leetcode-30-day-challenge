package main

import "fmt"

func moveZeroes(nums []int) {
	zeroCount := 0
	for i, v := range nums {
		if v == 0 {
			zeroCount++
		} else {
			nums[i-zeroCount] = v
		}
	}
	for i := len(nums) - zeroCount; i < len(nums); i++ {
		nums[i] = 0
	}
}

func main() {
	nums := []int{1, 1, 0, 0, 3, 0, 12}
	moveZeroes(nums)
	fmt.Println(nums)
}
