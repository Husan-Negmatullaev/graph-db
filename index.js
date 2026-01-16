var V = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var E = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
  [4, 8],
  [4, 9],
  [5, 10],
  [5, 11],
  [6, 12],
  [6, 13],
  [7, 14],
  [7, 15],
];

function _parents(vertices) {
  var accumulate = Array();

  for (var i = 0; i < E.length; i++) {
    var edge = E[i];

    if (vertices.indexOf(edge[1]) === -1) continue;

    accumulate[i] = edge[0];
  }

  return accumulate;
}

var theParents = (vertices) =>
  E.reduce(
    (acc, edge) => (
      parent = edge[0]
      , child = edge[1]
      , vertices.includes(child) ? acc.concat(parent) : acc
    )
    , []
  )

var theChildren = (vertices) =>
  E.reduce(
    (acc, edge) => (
      child = edge[1]
      , parent = edge[0]
      , vertices.includes(parent) ? acc.concat(child) : acc
    )
    , []
  )

// console.log(
//   theChildren(
//     theChildren(
//       theChildren(
//         theChildren(
//           theParents(
//             theParents(
//               theParents([8])
//             )
//           )
//         )
//       )
//     )
//   )
// )

console.log(theChildren(theChildren(theChildren(theParents(
  theParents(
    theParents([8])
  )
)))))
