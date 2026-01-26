import { useContext } from 'react'
import Rendering from '../RenderingComponent/Rendering'
import { data } from './data'
import { FeatureFlagsContext } from './context/FeatureFlagsGlobalState'
import RandomColorGenerator from '../RandomColorGenerator/RandomColorGenerator';

export default function FeatureFlag() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);
    const compToRender = [
        {
            key: 'showRandomColorGenerator',
            component: <RandomColorGenerator />
        }

    ]

    function checkCompToRender(key) {
        return enabledFlags?.[key]
    }

    const renderingContent = (


        loading && !enabledFlags ? null : compToRender.map((item) => {
            return (
                checkCompToRender(item.key) ? item.component : null
            )
        })


    )



    return (
        <Rendering data={data} renderingComponent={renderingContent} />
    )
}
