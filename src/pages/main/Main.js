import {Container} from "@mui/material";
import TabsComponent from '../../components/Tabs'
import {useState} from "react";

const GetCategories = ({action}) => {
    switch (action) {
        case 'souz': {
            
        }
    }
}

function Main(){

    const categoriesSelect = [
        {value:'souz', label: 'о союзе'}
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    return(
        <Container>
            <TabsComponent categoriesSelect/>
        </Container>
    )
}
export default Main