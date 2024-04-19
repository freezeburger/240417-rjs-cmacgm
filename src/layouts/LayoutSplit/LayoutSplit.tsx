import { Children, FC, ReactNode, useCallback } from 'react';
import { LayoutSplitWrapper } from './LayoutSplit.styled';
import LayoutBase from '../LayoutBase/LayoutBase';


interface ContentProps {}
type Content = {type:FC<ContentProps>, props:ContentProps} & ReactNode;

interface LayoutSplitProps{ 
   children:Content | Content[]
}

const LayoutSplit: {Aside:FC<ContentProps> ; Main:FC<ContentProps> } & FC<LayoutSplitProps> = ({ children }) => {

   Children.forEach(children, child => ![Aside, Main].includes(child.type) && console.error('Invalid "LayoutSplitProps" children.') );
   
   const extractContentFrom = useCallback((slotType:FC<ContentProps>) => Children.map(children, child => child.type == slotType && child.props.children ),[]);

   const aside = extractContentFrom( Aside );
   const main = extractContentFrom( Main );
   
   return (
      <LayoutBase>
         <LayoutSplitWrapper>
            <aside>
               {aside}
            </aside>
            <main>
               {main}
            </main>
         </LayoutSplitWrapper>
      </LayoutBase>
   )
};


const Aside: FC<ContentProps> = () => false;
const Main: FC<ContentProps> = () => false;

LayoutSplit.Aside = Aside;
LayoutSplit.Main = Main;

export default LayoutSplit;
