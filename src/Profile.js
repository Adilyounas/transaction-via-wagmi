import { useAccount, useEnsName } from 'wagmi'

 function Profile() {
  const { address } = useAccount()
  const { data, error, status } = useEnsName({ address })
  console.log(address);
  console.log(data);
  if (status === 'pending') return <div>Loading ENS name</div>
  if (status === 'error')

    return <div>Error fetching ENS name: {error.message}</div>
  return <div>ENS name: {data}</div>
}

export default Profile