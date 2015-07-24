import h from 'virtual-dom/h'
import vdom from 'virtual-dom'
import main from 'main-loop'

var loop = main({ n: 0 }, render, vdom)
document.querySelector('#content').appendChild(loop.target)

function render (state) {
  return <div>
    <h1>clicked {String(state.n)} times</h1>
    <button onclick={onclick}>click me!</button>
  </div>

  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
