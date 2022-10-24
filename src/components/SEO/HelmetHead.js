import { Helmet } from 'react-helmet-async';

const HelmetHead = (props) => {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                <meta
                    name="description" 
                    content={props.description}
                />
            </Helmet>
        </div>
    );
}
 
export default HelmetHead;