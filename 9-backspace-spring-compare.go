package main

import (
	"bytes"
	"fmt"
)

func processString(str []byte) int {
	var cur int

	for _, ch := range str {
		if ch == '#' {
			if cur > 0 {
				cur--
			}
		} else {
			str[cur] = ch
			cur++
		}
	}

	return cur
}

func backspaceCompare(S string, T string) bool {
	s1 := []byte(S)
	s2 := []byte(T)
	len1 := processString(s1)
	len2 := processString(s2)
	return bytes.Equal(s1[:len1], s2[:len2])
}

func main() {
	s := "a#c"
	t := "b"
	fmt.Println(backspaceCompare(s, t))

}
