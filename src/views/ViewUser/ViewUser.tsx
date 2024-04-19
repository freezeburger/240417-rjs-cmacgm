import LayoutSplit from '../../layouts/LayoutSplit/LayoutSplit'

function ViewUser() {

  return (
      <LayoutSplit>
        <LayoutSplit.Aside> Aside Content </LayoutSplit.Aside>
        <LayoutSplit.Main> Main Content </LayoutSplit.Main>
      </LayoutSplit>
  )
}

export default ViewUser
