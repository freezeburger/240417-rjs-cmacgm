
/*

Hook 


Un hook (littéralement « crochet » ou « hameçon ») permet à l'utilisateur d'un logiciel de personnaliser le fonctionnement de ce dernier, 
en lui faisant réaliser des actions supplémentaires à des moments déterminés.



"A hook (literally 'hook' or 'fishhook') allows the user (developper) of a software to customize its operation, 
by having it perform additional actions at specific moments."

*/

import { useEffect } from "react";

class ClassComponnent extends React.Component{

    state: Readonly<{}> = {};

    // LifeCycle Hooks

    /* 
    HOOK when rReact instanciate the commponent
    */
    constructor(props:object){
        super(props);
        this.setState({}) //inherited from  React.Component
    }

    /*
        HOOK when React ADD this component to the DOM
    */
    componentDidMount(): void { 
       /* 
            pseudoCallProcessA()
            pseudoCallProcessB()
    }   */

    /*
        HOOK when React UPDATE this component
    */
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void { 
    }

    /*
        HOOK when React REMOVE this component to the DOM
    */
    componentWillUnmount(): void { 
        /* 
            pseudoCancelProcessA()
            pseudoCancelProcessB() 
        */
    }


}


/**
 * Fonctional HOOKS
 * 
 * Give access to functionnal Components to the class Mechanism
 * They can only used in functionnal Components
 * 
 * By CONVENTION they start with "use"
 * 
 */

const FunctionnalComponent:FC<object> = (props) => {

    /**
     * Function is being called the  on each update
     */

    const [state,setState] = useSate(0)
   
    /*
        const stateMechanismArray = useSate(0)
        const stateGetter = stateMechanism[0]
        const stateMutatorFunction = stateMechanism[1]
    */

    const operateBeforeDestroy = () => {}

    const operateFirstRender = () => {
        return operateBeforeDestroy
    }

    useEffect( operateFirstRender, [/* retrigger values */])
    /*
        React triggers "operateFirstRender" on First Render
            if "operateFirstRender" returns a function React will reserve the returned function
        Retriggers "operateFirstRender" if retrigger values change.
        Before destroyning the component
            if  React has reserved function it will invoke it
    */
   

}