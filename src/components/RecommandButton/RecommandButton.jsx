import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//to be collected from backend

const recommandations = [
    'Website Design',
    'WordPress',
    'Logo Design',
    'AI Services'
]
const RecommandButton = () => {

    return (

        <Stack direction="row" spacing={1}>
            {recommandations.map(recommandation => {
                return <Button

                    size='small'
                    key={recommandation}
                    sx={{
                        borderColor: 'white',
                        backgroundColor: 'transparent',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'black',
                            borderColor: 'white'
                        },
                        
                    }}
                    variant='outlined'>{recommandation}</Button>
            })}

        </Stack>

    )
}

export default RecommandButton