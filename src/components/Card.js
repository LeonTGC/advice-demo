

const Card = ({ advice, getAdvice }) => {

    return (
        <div>
            <h2>{advice.slip}</h2>
            <Button func={getAdvice} txt="Get Advice" />
        </div>
    )
}

export default Card