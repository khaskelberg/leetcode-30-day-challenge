<?php

function run($nums) {
    $res = $nums[0];
    for ($i = 1; $i < count($nums); $i++) {
        $res = $res ^ $nums[$i];
    }
    return $res;
}
