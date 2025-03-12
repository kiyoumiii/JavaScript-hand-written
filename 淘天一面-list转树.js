// 完成 convert(list) 函数，实现将 list 转为 tree
/**
 * @param list {object[]}, 
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */

// 函数实现，总体思路为递归
function convert(list, parentKey, currentKey, rootValue) {
    const root = { [currentKey]: rootValue, children: [] };
  
    function buildTree(node, parentId) {
      list.forEach(item => {
        if (item[parentKey] === parentId) {
          const childNode = { ...item, children: [] };
          node.children.push(childNode);
          buildTree(childNode, item[currentKey]);
        }
      });
    }
  
    buildTree(root, rootValue);
  
    return root;
  }
  
  const list = [
    {
      "id": 19,
      "parentId": 0,
    },
    {
      "id": 18,
      "parentId": 16,
    },
    {
      "id": 17,
      "parentId": 16,
    },
    {
      "id": 20,
      "parentId": 17,
    },
    {
      "id": 16,
      "parentId": 0,
    }
  ];
  
  const result = convert(list, 'parentId', 'id', 0);
  const tree = {
    "id": 0,
    "children": [
      {
        "id": 19,
        "parentId": 0
      },
      {
        "id": 16,
        "parentId": 0,
        "children": [
          {
            "id": 18,
            "parentId": 16
          },
          {
            "id": 17,
            "parentId": 16,
            "children": [
              {
                "id": 20,
                "parentId": 17
              }
            ]
          }
        ]
      }
    ]
  }
  
  console.log(JSON.stringify(result, null, 2), 'result')