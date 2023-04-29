import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALr7qK2HcL6RmUC0TQLaxv05AEkm_kefc",
  authDomain: "base-de-datos-app-777c3.firebaseapp.com",
  projectId: "base-de-datos-app-777c3",
  storageBucket: "base-de-datos-app-777c3.appspot.com",
  messagingSenderId: "680908096857",
  appId: "1:680908096857:web:41736bfec0281c63cff848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Consultaar Base de datos
const bdd = getFirestore();

// CRUD Juegos

// Create
export const createGames = async () => {
  const promise = await fetch('./json/juegos.json')
  const juegos = await promise.json()
  juegos.forEach(async (juego) => {
    await addDoc(collection(bdd, "juegos"), {
      title: juego.title,
      stock: juego.stock,
      genre: juego.genre,
      score: juego.score,
      price: juego.price,
      console: juego.console,
      img: juego.img
    })
  })
}

// Get collection
export const getGames = async () => {
  const juegos = await getDocs(collection(bdd, "juegos"))
  const items = juegos.docs.map(juego => {
    return { ...juego.data(), id: juego.id }
  })
  return items
}

// Get item
export const getGame = async (id) => {
  const juego = await getDoc(doc(bdd, "juegos", id))
  const item = { ...juego.data(), id: juego.id }
  return item
}

// Update juegos
export const updateGames = async(id, info) => {
  const estado = await updateDoc(doc(bdd, "juegos", id), info)
  console.log(estado)
}

export const deleteGame = async(id) => {
  const estado = await deleteDoc(doc(bdd, "juegos", id))
  console.log(estado)
}

// Create y Read orden de compra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
    cliente: cliente,
    precioTotal: precioTotal,
    items: carrito,
    fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  console.log(item)
}