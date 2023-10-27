import { useSelector } from 'react-redux'
import './PassBook.css'
import PassBookTable from './PassBookTable'
import { stateType } from '../../store'

const PassBook: React.FC = () => {
  const userInfo = useSelector((state: stateType) => state.userInfo)

  return (
    <div className="passbook">
      <h2>Passbook</h2>

      {userInfo.name ? <PassBookTable /> : <h3>Login To see your passbook</h3>}
    </div>
  )
}

export default PassBook
