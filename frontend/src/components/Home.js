import axios from "axios";
import {useState} from "react";

/**
 * the home page component.
 * @param props: all the attribute:
 *
 * @returns {JSX.Element} - the home page html.
 */
export default function Home(props) {
    /**
     * function to fetch the data from the server.
     * @param event - the submit event from the list.
     * @returns {Promise<void>} - the data from the server.
     */
    const fetchData = async event => {
        let conditions = ""
        if (Allergies)
            conditions += 'Allergies'
        if (CardioVascular) {
            if (condition !== "")
                conditions += ', '
            conditions += 'CardioVascular'
        }
        if (Diabetes) {
            if (condition !== "")
                conditions += ', '
            conditions += 'Diabetes'
        }
        if (conditions !== "" && condition !== '') {
            conditions += ', '
            conditions += condition
        }
        const sendData = {
            firstName, lastName, dateOfBirth, address, city, zipCode, landLine, cellularPhone, infected, conditions
        }
        console.log(sendData)
        try {
            await axios.post('http://localhost:8080/Human', sendData);
            setInfoAdd("The patient added, add another one or move the information page.")
        } catch (e) {
            console.log(e.response.data.message);
            setInfoAdd("There was some problem add the patient, please try again.")
        }
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState('default');
    const [zipCode, setZipCode] = useState("");
    const [landLine, setLandLine] = useState("");
    const [cellularPhone, setCellularPhone] = useState("");
    const [infected, setInfected] = useState(false);
    const [condition, setCondition] = useState("");
    const [InfoAdd, setInfoAdd] = useState("");
    const [Diabetes, setDiabetes] = useState(false);
    const [CardioVascular, setCardioVascular] = useState(false);
    const [Allergies, setAllergies] = useState(false);

    return (
        <div className="row container-fluid justify-content-center">
            {
                <div className="col-12 col-md-8">
                    <form onSubmit={fetchData}>
                        <div className="row my-3">
                            <div className="form-group col-6">
                                <label htmlFor="FirstName">First name:</label>
                                <input type="text"
                                       className="form-control"
                                       id="FirstName"
                                       onChange={e => setFirstName(e.target.value)}
                                       placeholder={"First name"}
                                       required/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="LastName">Last name:</label>
                                <input type="text"
                                       className="form-control"
                                       id="LastName"
                                       placeholder={"Last name"}
                                       onChange={e => setLastName(e.target.value)}
                                       required/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="form-group col-6">
                                <label htmlFor="LandLine">Land line:</label>
                                <input type="text"
                                       className="form-control"
                                       id="LandLine"
                                       onChange={e => setLandLine(e.target.value)}
                                       placeholder='land line'
                                       required/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="mySelect">City:</label>
                                <select className="form-select "
                                     
                                        onChange={e => setCity(e.target.value)}
                                        placeholder="choose your city">
                                    <option value="default" >choose your city</option>
                                    <option value="Vasco Da Gama">Vasco Da Gama</option>
                                    <option value="Gangtok">Gangtok</option>
                                    <option value="Aurangabad">Aurangabad</option>
                                    <option value="Jehanabad">Jehanabad</option>
                                    <option value="Tezpur">Tezpur</option>
                                    <option value="Buxar">Buxar</option>
                                    <option value="Amaravati">Amaravati</option>
                                    <option value="Tadepalligudem">Tadepalligudem</option>
                                    <option value="Kavali">Kavali</option>
                                    <option value="Ballia">Ballia</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="form-group col-6">
                                <label htmlFor="Address">Address:</label>
                                <input type="text"
                                       className="form-control"
                                       id="Address"
                                       onChange={e => setAddress(e.target.value)}
                                       placeholder="address"
                                       required/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="zip">Zip Code:</label>
                                <input type="text"
                                       className="form-control"
                                       id="zip"
                                       onChange={e => setZipCode(e.target.value)}
                                       placeholder="zip code"/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="form-group col-6">
                                <label htmlFor="DateOfBirth">Date of birth: </label>
                                <input type="date"
                                       className="form-control"
                                       id="DateOfBirth"
                                       onChange={e => setDateOfBirth(e.target.value)}
                                       required/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="CellularPhone">Cellular phone:</label>
                                <input type="text"
                                       className="form-control"
                                       id="CellularPhone"
                                        placeholder="cellular phone"
                                       onChange={e => setCellularPhone(e.target.value)}
                                       required/>
                            </div>
                        </div>
                        <h4>previous conditions:</h4>
                        <div className="checkbox my-1">
                            <label><input type="checkbox"
                                          value=""
                                          onChange={e => setDiabetes(!Diabetes)}
                            />Diabetes</label>
                        </div>
                        <div className="checkbox my-1">
                            <label><input type="checkbox"
                                          value=""
                                          onChange={e => setCardioVascular(!CardioVascular)}
                            />Cardio-Vascular problems</label>
                        </div>
                        <div className="checkbox my-1">
                            <label><input type="checkbox"
                                          value=""
                                          onChange={e => setAllergies(!Allergies)}
                            />Allergies</label>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="other"
                            >Other</label>
                            <input type="text"
                                   className="form-control"
                                   id="other"
                                   placeholder="other conditions"
                                   onChange={e => setCondition(e.target.value)}/>
                        </div>
                        <div className="checkbox my-3">
                            <label><input type="checkbox"
                                          value=""
                                          onChange={e => setInfected(!infected)}
                            />have you infected by covid 19?</label>
                        </div>
                        <button type="submit" className="btn btn-primary my-2">Submit</button>
                    </form>
                </div>
            }
            {InfoAdd}
        </div>
    );
}