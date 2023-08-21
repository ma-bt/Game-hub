import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "./Component/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav" "aside main`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main">
          
        </GridItem>
        <GridItem area="aside">
       
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
