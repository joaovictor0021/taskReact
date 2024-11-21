function Button(props) {
    return (
        <button {...props} className="border-2 border-slate-400 bg-slate-400 text-xl text-slate-100 rounded-md px-2 py-2">{props.children}</button>
    )
}

export default Button;