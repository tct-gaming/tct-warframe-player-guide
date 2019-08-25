// External config file.
import config from '../../contents/docs/config.json'

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
    // My version doesn't handle this; what happens if there is no "parents: []" in the slug?
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
            order: config.order[item.parents[i]] || 0,
            children: [],
          }
          
          subtree.push(newNode)
          dir.push(newNode)
        }

        subtree = subtree.find(node => node.title === item.parents[i] && node.children).children
      }

      // Children
      subtree.push(item)
    }
  })

  return [tree, dir]
}

export const convertToTree = data => (
  constructTree(data.map(edge => ({
    path: edge.node.fields.slug,
    key: edge.node.id,
    title: edge.node.frontmatter.title,
    parents: edge.node.frontmatter.parents,
    order: edge.node.frontmatter.order || 0,
  })))
)
