const React = {
    createElement,
}

const ReactDOM = {
    render
}

// 需要引入babel, 将jsx转换为React.createElement 的一个对象
function createElement(tag, props, ...children) {
    return {
        type: tag,
        props:{}, 
        children
    }
}

function render(vnode, container) {
    let dom;
    if(typeof vnode == 'object' && vnode.type) { // vnode节点
        dom = document.createElement(vnode.type);
        if(vnode.children && vnode.children.length) {
            vnode.children.forEach((child) => {
                render(child, dom);
            })
        }
        // 添加属性
        Object.keys(vnode.props)
        .forEach(name => {
          dom[name] = element.props[name]
        })
    } else { // 文本节点
        dom = document.createTextNode(vnode);
    }
    if(container) {
        container.appendChild(dom);
    }
    return dom;
}


function helloWorld() {
    const element = (
        <div id="m-wrap">
            <h1>Hello, world! </h1>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
helloWorld();
