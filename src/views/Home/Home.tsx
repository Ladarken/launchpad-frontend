import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import Countdown from 'react-countdown';
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'

import { useWallet } from 'use-wallet'
const Banner: React.FC = () => {

    return (
      <div dangerouslySetInnerHTML={{ __html: `
        <video
          style="width: 500px;"
          id="banner-vid"
          loop
          muted
          autoplay
          playsinline
        ><source src="https://i.imgur.com/LSwyBNL.mp4" type="video/mp4"/></video>
      ` }}></div>
    )
  
}



const Home: React.FC = () => {
  const { account } = useWallet()
  return (
    <Page>
{/*}
<div style={{ width: "100%", overflow: "hidden", height: "4rem", paddingLeft: "100%", boxSizing: "content-box"}}>
<div className="ticker">
  <div className="ticker__item">aaaa</div>
  <div className="ticker__item">bbbbb</div>
  <div className="ticker__item">ccccc</div>
  <div className="ticker__item">dddddd</div>
</div>
</div>*/}

      <PageHeader
        icon={<Banner/>}
        title="Benchmark Launchpad"
        subtitle="Stake Uniswap LP tokens to farm MARK."
      />


      <Container>
        <Balances />
      </Container>
      <Spacer size="md" />
            <Spacer size="md" />
      <div
        style={{
          margin: '0 auto',
          width: 752
        }}
      >
        <Button pools={true} text="View Pools" to="/pools" variant="secondary" />
      </div>
      <Spacer size="md" />
            <Spacer size="md" />

            {(new Date() < new Date(1608847490*1000)) ?
        <><StyledInfo>
        <span>Fair Launch ends in:</span> <CountdownWrapper><Countdown date={new Date(1608847490*1000)} /></CountdownWrapper>
        </StyledInfo>
        <Spacer size="lg" />
        <StyledWrapper>
          <Card>
            <CardContent>
              <p>After the Launchpad ends, please migrate your MARK-ETH and MARK-USDC LP tokens to <a style={{color:"#2CF48B"}} href="https://thepress.benchmarkprotocol.finance" target="_blank">The Press</a>, now open for deposits. 

              For instructions, <a style={{color:"#2CF48B"}} href="https://medium.com/benchmarkprotocol/transitioning-from-benchmark-launchpad-to-the-press-80e480ee4bc7" target="_blank">click here</a>. 

              Mark rewards must be claimed from the Launchpad before 4:15PM (EST) December 28th. LP tokens may be claimed indefinitely. </p>
            </CardContent>
          </Card>
        </StyledWrapper></>
        :
        <>
          <StyledInfo>
          Thanks for participating! The fair launch is now over. Please unstake your LP tokens and claim your MARK rewards. 
          </StyledInfo>
          <Spacer size="lg" />
          <StyledWrapper>
            <Card>
              <CardContent>
                <p>🚨 Please migrate your MARK-ETH and MARK-USDC LP tokens to <a style={{color:"#2CF48B"}} href="https://thepress.benchmarkprotocol.finance" target="_blank">The Press</a>, now live. 

                For instructions, <a style={{color:"#2CF48B"}} href="https://medium.com/benchmarkprotocol/transitioning-from-benchmark-launchpad-to-the-press-80e480ee4bc7" target="_blank">click here</a>. 

                Mark rewards must be claimed from the Launchpad before 4:15PM (EST) December 28th. LP tokens may be claimed indefinitely. </p>
              </CardContent>
            </Card>
          </StyledWrapper>
        </>

      }

      <Spacer size="lg" />
      <Spacer size="md" />
    </Page>
  )
}
const CountdownWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 18px;
  text-transform:uppercase;
  font-weight: 700;
`
const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  z-index:2;
  color:#fff;
  max-width:600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`


export default Home
