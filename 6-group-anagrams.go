package main

import (
	"fmt"
	"sort"
)

func sortString(str string) string {
	s := []rune(str)
	sort.SliceStable(s, func(i, j int) bool {
		return s[i] < s[j]
	})
	return string(s)
}

func groupAnagrams(strs []string) [][]string {
	res := make(map[string][]string)
	for _, str := range strs {
		res[sortString(str)] = append(res[sortString(str)], str)
	}

	grouped := make([][]string, 0, len(res))
	for _, val := range res {
		grouped = append(grouped, val)
	}

	return grouped
}

func groupAnagramsFaster(strs []string) [][]string {
	res := make(map[string][]string)
	for _, str := range strs {
		s := []byte(str)
		sort.SliceStable(s, func(i, j int) bool {
			return s[i] < s[j]
		})
		sortedStr := string(s)
		res[sortedStr] = append(res[sortedStr], str)
	}

	var grouped [][]string

	for _, val := range res {
		grouped = append(grouped, val)
	}

	return grouped
}

func main() {
	strs := []string{"eat", "tea", "tan", "ate", "nat", "bat"}

	fmt.Println(groupAnagrams(strs))
}
