import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`
const StatBlock = styled.div`
  background:#f2f2f2;
  font-size:2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`
export default function Stats({ url }) {
  const { stats, loading,  error} = useStats(url);
  // console.log(stats)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>出错了...</p>
  // ajax  loading false 
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  )
}