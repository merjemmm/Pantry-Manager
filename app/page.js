'use client'

import Image from "next/image";
// import styles from "./page.module.css";

import { useState, useEffect } from "react";

import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'
import {Box, Button, Container, createTheme, Modal, Paper, ButtonGroup, searchQuery, setSearchQuery,
  Stack, TableContainer, TextField, ThemeProvider, Typography, collectionRef, spacing} from '@mui/material'
import { lime, purple } from '@mui/material/colors';
import { firestore } from "@/firebase";

const theme = createTheme({
  palette: {
    primary: {
      main: '#32DAC3',
      //light: '#90E1D6',
      //dark: '#219C8C',
      //contrastText: '#242105'
    },
    secondary: {
      main: '#90E1D6',
    },
  },

  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },

})

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState([])


  const deleteInventory = async () => {
    const inventorycollect  = collection(firestore, 'inventory')
    const docs = await getDocs(inventorycollect)

    docs.forEach((doc)=> {
      removeItem(doc)

    })

    await updateInventory()
  }

  // const deleteAllInventory = async () => {
  //   const snapshot = await db.collection('inventory').get();
  //   const batch = db.batch();
  //   snapshot.docs.forEach(doc => {
  //     batch.delete(doc.ref);
  //   });
  //   await batch.commit();
  //   alert('All inventory items have been deleted.');
  // };

  const updateInventory = async () => {
    const snapshot  = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc)=> {
        inventoryList.push({
        name: doc.id,
        ...doc.data(),

      })
    })
    setInventory(inventoryList)

  }

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item.toLowerCase())
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const {quantity} = docSnap.data()
      await setDoc(docRef, {quantity: quantity + 1})
    } else {
      await setDoc(docRef, {quantity: 1})
    }

    await updateInventory()
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const {quantity} = docSnap.data()
      if ( quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }

    await updateInventory()
  }


  useEffect(() => {
    updateInventory()
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = inventory.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
    } else {
      setFilteredItems(inventory);
    }

  },[searchQuery])

  console.log(inventory)
  
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)



  return ( <ThemeProvider theme = {theme}>
    <Box //width = '800px'
        //height = '100px'
        //alignItems= 'space-between' 
        justifyContent = 'center'
        display = 'flex'
        alignItems="center"
        height = "20vh"
        width= '100vw'
        sx = {{mt: 2 }}
        flexDirection= 'column'> 
      <Typography variant = 'h2' padding = {2} > Welcome to your Pantry Manager 
        </Typography>
        <Typography variant = 'h' padding = {3} > You can add and subtract items easily from your inventory.
         
        </Typography>
        </Box>
  <Box width = '100vw' height = '100vh' display = 'flex' 
    flexDirection='column'
    justifyContent= 'center'
    alignItems= 'center'
    gap = {2}
  > 
    <Modal

    open = {open}
    onClose = {handleClose}> 
      <Box
      position = 'absolute'
      top = '50%'
      left = '50%'
      sx = {{transform: 'tranlate(-50%, -50%)'}}
      width = {400}
      bgcolor = '#f0f0f0'
      boxShadow = {24}
      p = {4}
      display = 'flex'
      flexDirection= 'column'
      gap ={3}

      > 

      <Stack width = '100%' direction = 'row' spacing = {1} > 
        <TextField
        variant = 'outlined'
        label="Enter New Item"
        fullwidth
        value = {itemName}
        onChange={(e) => {
          setItemName(e.target.value)
        }}
        > 
        </TextField>
        <Button
        //sx = {{bgcolor: 'secondary.main'}}
        variant = 'contained'
        onClick={() => {
          addItem(itemName)
          setItemName('')
          handleClose()
        }}
        > 
        Add It
        </Button>
      </Stack>
      </Box>
       </Modal>
  
      <Box border = '1px solid #333'> 

        <Box
        width = '800px'
        height = '100px'
        alignItems= 'space-between' 
        justifyContent = 'center'
        display = 'flex'
        //border = '1px solid #333'
        sx = {{bgcolor: 'secondary.main'}}> 
        <Typography variant = 'h2' 
        color = '#333' sx = {{my: 3, textAlign: 'center'}}> 
        Your Inventory 
        </Typography>

        </Box>
        <Box
        sx = {{ bgcolor: 'secondary.main', textAlign: 'center', borderBottom: '1px solid #333' }}
        justifyContent = 'center'>
        <TextField
        variant = 'outlined'
        label="Search the Inventory"
        fullwidth
        
        sx = {{my: 0.5, color: 'white', bgcolor: '#DDDCD7', width: '500px'}}
        value = {searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        > 

        </TextField>
        </Box>
      <Stack width = '800px' height= '300px' spacing = {2} overflow= 'auto'>
        {filteredItems.map(({name, quantity}) => (
          <Box key = {name} width = '100%' minHeight = '150px' 
          display = 'flex' alignItems= 'center' justifyContent= 'space-between'
          padding = {5} bgcolor = '#AFDADF' 
          > 
          <Typography variant = 'h3' color = '#333' textAlign= 'center' > 
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>

          <Typography variant = 'h3' color = '#333' textAlign= 'center' > 
            {quantity}
          </Typography>

          <Button variant = 'contained' onClick={() => {removeItem(name)}}>
          Remove
          </Button>
          <Button variant = 'contained' onClick={() => {addItem(name)}}>
          Add
          </Button>
          </Box>
        ))}


      </Stack>
      </Box>
      <ButtonGroup variant="contained" aria-label="Basic button group"
      //startIcon={<AddIcon/>}
      justifyContent = 'space-between'
      display = 'flex'
      sx = {{bgcolor: 'secondary.main'}}>
        <Button
          alignItems = 'center'
          sx = {{width: '400px'}}
          
          onClick={() => {
            handleOpen()
          }}> Add new Item </Button>
          

        <Button
          sx = {{width: '400px'}}

          onClick={() => {
            deleteInventory()

          }}> Delete All Items
        </Button>
      </ButtonGroup>

  </Box>
  </ThemeProvider>
  )
}
