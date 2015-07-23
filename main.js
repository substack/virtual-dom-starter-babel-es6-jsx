import h from 'virtual-dom/h'
import vdom from 'virtual-dom'
import main from 'main-loop'

var loop = main({ n: 0 }, render, vdom)
document.querySelector('#content').appendChild(loop.target)

function render (state) {
  return h('div', [
    h('h1', 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ])
  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
