var quicksort = module.exports = function(arr, comparator, min, max) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  if (!min) {
    min = 0;
  }

  if (!max) {
    max = arr.length - 1;
  }

  if (max - min <= 1) return arr;

  var pivot = arr[Math.floor(min + (max - min) / 2)];
  var left = min;
  var right = max;

  while (left <= right) {
    while (comparator(arr[left], pivot) < 0) {
      left++;
    }

    while (comparator(arr[right], pivot) > 0) {
      right--;
    }

    if (left <= right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  quicksort(arr, comparator, min, right);
  quicksort(arr, comparator, left, max);
  return arr;
};
