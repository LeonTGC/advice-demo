import Button from "./Button"

const Card = ({ advice, getAdvice }) => {

    return (
        <div>
            <h2>{advice.slip.advice}</h2>
            <Button func={getAdvice} text="Get Advice" />
        </div>
    )
}

export default Card