import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        size = len(stones)
        stones = [-stone for stone in stones]
        heapq.heapify(stones)
        while size > 1:
            x = heapq.heappop(stones)
            y = heapq.heappop(stones)
            res = x - y
            if res == 0:
                size -= 2
            else:
                size -= 1
                heapq.heappush(stones, res)
        
        if size == 0:
            return 0
        
        return -heapq.heappop(stones)
