/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');
    const [description, setDescription] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [bills, setBills] = useState([]);
    const [price, setPrice] = useState('');


    //for myBills

    useEffect(() => {
        getBills().then(bills => {
            setBills(bills)

        })
    }, [])

    function addnewBills(ev) {
        ev.preventDefault();
        const url = "http://localhost:4000/api" + '/bill';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name,
                datetime,
                price
            })
        }).then(response => {
            response.json().then(json => {
                setName('');
                setDatetime('');
                setPrice('');
                console.log("result", json)
                setBills(prevBills => {
                    const updatedBills = [...prevBills, json];
                    localStorage.setItem('bills', JSON.stringify(updatedBills));
                    return updatedBills;
                });
            })
        })
    }

    async function handleDeleteClick(_id) {
        try {
            const response = await fetch(`http://localhost:4000/api/bills?id=${_id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete the bill');
            }
            setBills(prevBills => {
                const updatedBills = prevBills.filter(bill => bill._id !== _id);
                localStorage.setItem('bills', JSON.stringify(updatedBills));
                return updatedBills;
            });

            console.log('Bill deleted successfully');
        } catch (error) {
            console.error(error);
        }
    }
    async function getBills() {
        const url = "http://localhost:4000/api" + '/bills';
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        })

        return await response.json();

    }

    //for transactions
    useEffect(() => {
        getTransactions().then(transactions => {
            setTransactions(transactions)

        })

    }, [])
    async function getTransactions() {
        const url = "http://localhost:4000/api" + '/transactions'
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        })


        return await response.json();
    }

    function addNewTransAction(ev) {
        ev.preventDefault();
        const url = "http://localhost:4000/api" + '/transaction';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name,
                description,
                datetime,
                price
            })
        }).then(response => {
            response.json().then(json => {
                setName('');
                setDatetime('');
                setDescription('')
                setPrice('');
                console.log('result', json)
                setTransactions(prevTransactions => [...prevTransactions, json]);

            })
        })
    }

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }
    //console.log(subpage)

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }



    if (!ready) {
        return 'Loading....'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }



    function linkClasses(type = null) {
        let classes = 'py-2 px-6'
        if (type == subpage) {
            classes += ' bg-primary text-white rounded-full';
        }


        return classes
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    let balance = 0;
    let billAmount = 0;

    for (const transanction of transactions) {
        balance = balance + transanction.price
    }

    for (const bill of bills) {
        billAmount = billAmount + bill.price
    }

    balance = balance.toFixed(2);
    const fraction = balance.split('.')[2]

    billAmount = billAmount.toFixed(2);
    const billTotal = billAmount.split('.')[2]

    return (
        // <div>account page {user.name} {user.email} </div>
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bills')} to={'/account/bills'}>My Bills</Link>
                <Link className={linkClasses('tracker')} to={'/account/tracker'}>My Tracker</Link>
            </nav>
            {subpage === 'profile' && (
                <div className=" text-center max-w-xl mx-auto">
                    Logged in as <br />
                    {/* {user.name} <br /> ({user.email}) <br /> */}
                    <input type="text"
                        placeholder={user.name} />
                    <input type="text"
                        placeholder={user.email} />

                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>

                </div>
            )}
            {subpage === 'bills' && (
                <>
                    <div className="max-w-xl mx-auto text-center">

                        <div className=" text-center max-w-xl mx-auto text-center">
                            total amount of bills
                        </div>
                        <h1 className="text-4xl bold text-center">${billAmount}<span>{billTotal}</span></h1>

                        <section className="">
                            <form onSubmit={addnewBills}>
                                <div className=" ">
                                    <div className="basic flex border-box gap-2">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={ev => setName(ev.target.value)}
                                            placeholder="Name of task" />
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={ev => setPrice(ev.target.value)}
                                            placeholder=" price of item"
                                        />
                                    </div>
                                    <input
                                        value={datetime}
                                        onChange={ev => setDatetime(ev.target.value)}
                                        type="datetime-local" />
                                </div>
                                <button className="primary mt-2" type="submit">add new new</button>
                            </form>
                        </section>
                        <div className=" text-center max-w-xl mx-auto mt-20">
                            reoccuring bills
                        </div>
                        <div>

                            {bills.length > 0 && bills.map(bill => (


                                <div key={bill._id} className="transaction  justify-between flex p-4 border rounded-2xl ">
                                    <div className="left">
                                        <div className="name text-2xl">{bill.name}</div>
                                        <div className="price red text-2xl">{bill.price}</div>

                                    </div>
                                    <div className="">

                                        <div className="date text-2xl"> Due every month on {new Date(bill.datetime).toLocaleDateString(
                                            'en-US', {

                                            day: 'numeric',

                                        }

                                        )}</div>

                                        <button
                                            onClick={() => handleDeleteClick(bill._id)}
                                            className="rounded-xl w-full bg-red-400"
                                            type="button">delete</button>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </>
            )}

            {subpage === 'tracker' && (
                <div className="max-w-xl mx-auto text-center">
                    Tracker
                    <main>
                        <h1 className="text-4xl bold text-center">${balance}<span>{fraction}</span></h1>
                        <form
                            onSubmit={addNewTransAction}
                        >
                            <div className="basic flex border-box gap-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}
                                    placeholder="Name of task" />
                                <input
                                    type="number"
                                    value={price}
                                    onChange={ev => setPrice(ev.target.value)}
                                    placeholder=" price of item"
                                />

                                <input
                                    value={datetime}
                                    onChange={ev => setDatetime(ev.target.value)}
                                    type="datetime-local" />
                            </div>
                            <div className="description">
                                <input
                                    value={description}
                                    onChange={ev => setDescription(ev.target.value)}
                                    type="text"
                                    placeholder="description" />

                            </div>
                            <button className="primary mt-2" type="submit">add new transaction</button>
                        </form>

                        <div className="transaction mt-5 ">
                            {transactions.length > 0 && transactions.map(transaction => (

                                <div key={transaction._id}

                                    className="transaction  justify-between flex p-4 border rounded-2xl ">
                                    <div className="left">
                                        <div className="name text-2xl">{transaction.name}</div>
                                        <div className="description text-sm ">{transaction.description}</div>
                                    </div>
                                    <div className="right">
                                        <div className={"price text-right " + (transaction.price < 0 ? 'red' : 'green')}>
                                            {transaction.price}
                                        </div>
                                        <div className="datetime">{new Date(transaction.datetime).toLocaleDateString(
                                            'en-US', {
                                            month: 'numeric',
                                            day: 'numeric',
                                            year: '2-digit',
                                        }
                                        )}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>

            )}
        </div>
    )
}