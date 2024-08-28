// Placeholder to host a component
const Hours = () => {
    let date = new Date();
    let formattedDate = date.toLocaleTimeString();

    return (
        <>
            {formattedDate}
        </>
    );
}

export default Hours;
