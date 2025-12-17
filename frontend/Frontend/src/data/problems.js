export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: ["Exactly one solution exists.", "You may not reuse the same element."],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function twoSum(nums, target) {}`,
      python: `def twoSum(nums, target): pass`,
      java: `class Solution { public int[] twoSum(int[] nums, int target) { return new int[0]; } }`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {}`,
    },
    expectedOutput: {
      javascript: "[0,1]",
      python: "[0, 1]",
      java: "[0, 1]",
      cpp: "[0, 1]",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • DP",
    description: {
      text: "Find the maximum profit you can achieve from buying and selling once.",
      notes: ["You must buy before you sell."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxProfit(prices) {}`,
      python: `def maxProfit(prices): pass`,
      java: `class Solution { public int maxProfit(int[] prices) { return 0; } }`,
      cpp: `int maxProfit(vector<int>& prices) {}`,
    },
    expectedOutput: { javascript: "5", python: "5", java: "5", cpp: "5" },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Return true if any value appears at least twice in the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {}`,
      python: `def containsDuplicate(nums): pass`,
      java: `class Solution { public boolean containsDuplicate(int[] nums) { return false; } }`,
      cpp: `bool containsDuplicate(vector<int>& nums) {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", cpp: "true" },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Return true if t is an anagram of s.",
      notes: [],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {}`,
      python: `def isAnagram(s, t): pass`,
      java: `class Solution { public boolean isAnagram(String s, String t) { return false; } }`,
      cpp: `bool isAnagram(string s, string t) {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", cpp: "true" },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Determine if the input string has valid parentheses.",
      notes: ["Brackets must close in correct order."],
    },
    examples: [
      { input: 's = "()"', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {}`,
      python: `def isValid(s): pass`,
      java: `class Solution { public boolean isValid(String s) { return false; } }`,
      cpp: `bool isValid(string s) {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true", cpp: "true" },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: {
      text: "Find the contiguous subarray with the largest sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSubArray(nums) {}`,
      python: `def maxSubArray(nums): pass`,
      java: `class Solution { public int maxSubArray(int[] nums) { return 0; } }`,
      cpp: `int maxSubArray(vector<int>& nums) {}`,
    },
    expectedOutput: { javascript: "6", python: "6", java: "6", cpp: "6" },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find two lines that form a container with maximum water.",
      notes: [],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
    ],
    constraints: ["2 ≤ height.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {}`,
      python: `def maxArea(height): pass`,
      java: `class Solution { public int maxArea(int[] height) { return 0; } }`,
      cpp: `int maxArea(vector<int>& height) {}`,
    },
    expectedOutput: { javascript: "49", python: "49", java: "49", cpp: "49" },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array",
    description: {
      text: "Return an array where each element is the product of all other elements.",
      notes: ["No division allowed."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {}`,
      python: `def productExceptSelf(nums): pass`,
      java: `class Solution { public int[] productExceptSelf(int[] nums) { return new int[0]; } }`,
      cpp: `vector<int> productExceptSelf(vector<int>& nums) {}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
      cpp: "[24, 12, 8, 6]",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: "Merge all overlapping intervals.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10]]", output: "[[1,6],[8,10]]" },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {}`,
      python: `def merge(intervals): pass`,
      java: `class Solution { public int[][] merge(int[][] intervals) { return new int[0][0]; } }`,
      cpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10]]",
      python: "[[1, 6], [8, 10]]",
      java: "[[1, 6], [8, 10]]",
      cpp: "[[1, 6], [8, 10]]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "DP",
    description: {
      text: "Count distinct ways to climb n stairs.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {}`,
      python: `def climbStairs(n): pass`,
      java: `class Solution { public int climbStairs(int n) { return 0; } }`,
      cpp: `int climbStairs(int n) {}`,
    },
   expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp:"49\n1"
    },
  },
};
export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
 cpp: {
  name: "C++",
  icon: "/c++.png",
  monacoLang: "cpp",
},
};