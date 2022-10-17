import { Grid, GridItem} from '@chakra-ui/react';

import Caracteristica from './Caracteristica';

export default function Caracteristicas() {
  return (
    <Grid 
    templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)" ]} 
    gap={[1, 5]}
    mt={["10", "32"]}
    mx="auto"
    w="100%"
    justifyContent="space-between"
    alignItems="center"
    >
      <GridItem>
        <Caracteristica icon="cocktail" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Caracteristica icon="surf" text="Praia" />
      </GridItem>
      <GridItem>
        <Caracteristica icon="building" text="Moderno" />
      </GridItem>
      <GridItem>
        <Caracteristica icon="museum" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Caracteristica icon="earth" text="e mais" />
      </GridItem>
    </Grid>
  )
}
