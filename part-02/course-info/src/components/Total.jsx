const Total = ({ parts }) => {
    return (
        <div>
            <strong>Total of {parts.reduce((acc, part) => acc = acc + part.exercises, 0)} exercises</strong>
        </div>
    );
};

export default Total;