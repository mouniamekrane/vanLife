// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCjcoKEaCBO1AQN7R2GYacwgmegR4ZNFI8",
  authDomain: "vanlife-51f45.firebaseapp.com",
  projectId: "vanlife-51f45",
  storageBucket: "vanlife-51f45.appspot.com",
  messagingSenderId: "651331681158",
  appId: "1:651331681158:web:c370cdc6eee537e1bf8a07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)









export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}