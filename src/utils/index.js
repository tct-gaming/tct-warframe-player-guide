// Redo this for the headings.
export const sortTree = tree => {
  tree.sort((a, b) => {
    // console.log([a.title, b.title])
    if (
      ((a.children && b.children) || (!a.children && !b.children)) &&
      a.title > b.title
    )
      return 1
    else if (a.children) return 1
    return -1
  })
}

export const orderComparator = (menuA, menuB) => {
  let comparison = 0;
  if (menuA.order > menuB.order) {
    comparison = -1;
  } else if (menuA.order < menuB.order) {
    comparison = 1;
  }

  return comparison;
}

export const constructTree = list => {
  let tree = []
  let dir = []

  list.forEach(item => {
    if (item.parents === [] || item.parents === null) {
      tree.push(item)
    }
    else {
      let subtree = tree

      for (let i = 0; i < item.parents.length; i++) {
        if (subtree.filter(node => node.title === item.parents[i] && node.children).length === 0) {
          const newNode = {
            key: item.path,
            title: item.parents[i],
            children: [],
          }

          subtree.push(newNode)
          dir.push(newNode)
        }

        // Sort here.
        subtree = subtree.find(node => node.title === item.parents[i] && node.children).children
      }

      subtree.push(item)
    }
  })

  return [tree, dir]
}

// export const convertToTree = data => {
//   const list = data.map(edge => ({
//     path: edge.node.fields.slug,
//     key: edge.node.id,
//     title: edge.node.frontmatter.title,
//     parents: edge.node.frontmatter.parents,
//     order: edge.node.frontmatter.order || 0,
//   }))

//   return constructTree(list)
// }

export const convertToTree = data => {
  const list = data.map(edge => {
    console.log(`${JSON.stringify(edge.node.frontmatter)},`)
    // console.log('edge', edge.node.frontmatter)

    return {
      path: edge.node.fields.slug,
      key: edge.node.id,
      title: edge.node.frontmatter.title,
      parents: edge.node.frontmatter.parents,
      order: edge.node.frontmatter.order || 0,
    }
  })

  return constructTree(list)
}
