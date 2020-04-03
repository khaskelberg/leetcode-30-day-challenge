package main

import (
	"fmt"
	"math"
)

func maxSubArray(nums []int) int {
	sums := make([]int, len(nums))
	sum := 0
	for i, num := range nums {
		sum += num
		sums[i] = sum
	}

	maxDiff := math.MinInt32
	min := 0
	for _, v := range sums {
		if v-min > maxDiff {
			maxDiff = v - min
		}
		if v < min {
			min = v
		}
	}

	return maxDiff
}

func main() {
	nums := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	fmt.Println(maxSubArray(nums))
}
