import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
    return(
        <ThreeDots
            visible={true}
            height="120"
            width="120"
            color="blue"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default Loader