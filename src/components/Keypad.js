// Code Keypad Component Here

function Keypad (){
        function handleChangeEvent(){
            console.log("Entering password...");
        }

    return (
        <div>
            <input
                type="password"
                onChange={handleChangeEvent}
                placeholder="Enter password..."
            />
        </div>
    )
}

export default Keypad;