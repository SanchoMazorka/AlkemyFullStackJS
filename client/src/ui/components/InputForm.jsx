const InputForm = ({text, type, cb=null}) => {
	return (
		<div>
			<span>{text}</span>
			<input type={type} />
		</div>
	)
}

export default InputForm