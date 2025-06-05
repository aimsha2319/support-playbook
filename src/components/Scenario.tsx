import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ScenarioContainer = styled.div`
  padding: 2rem;
`;

const ScenarioTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const ScenarioContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const TextContent = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;

const StepNumber = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: #3b82f6;
  border-radius: 50%;
  color: white;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  margin-right: 1rem;
`;

const StepText = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
`;

interface Step {
  number: number;
  text: string;
}

interface CommonIssue {
  title: string;
  description: string;
}

interface ScenarioData {
  title: string;
  objective: string;
  steps: Step[];
  commonIssues: CommonIssue[];
  stats: {
    resolutionTime: string;
    successRate: string;
    commonCauses: string[];
  };
}

interface Scenarios {
  [key: string]: ScenarioData;
}

const scenarios: Scenarios = {
  'password-reset': {
    title: 'Password Reset Process',
    objective: 'Help customers securely reset their passwords and regain access to their accounts',
    stats: {
      resolutionTime: '15 minutes',
      successRate: '98%',
      commonCauses: ['Forgot password', 'Locked account', 'Multi-factor authentication']
    },
    steps: [
      {
        number: 1,
        text: 'Ask the customer to confirm their email address associated with the account. Verify the email is correct and active.'
      },
      {
        number: 2,
        text: 'Check if the account exists in the system by searching for the email address. Verify the account status and any recent password reset attempts.'
      },
      {
        number: 3,
        text: 'Send a password reset link to the confirmed email address. Include a unique token with a 24-hour expiration period.'
      },
      {
        number: 4,
        text: 'Guide the customer through the password reset process. Explain the security questions and temporary password requirements.'
      },
      {
        number: 5,
        text: 'Verify the password reset was successful. Confirm the new password meets security requirements and test the login functionality.'
      }
    ],
    commonIssues: [
      {
        title: 'Email not received',
        description: 'Check spam folder, verify email address, and confirm email delivery settings.'
      },
      {
        title: 'Invalid token',
        description: 'Token may have expired or been used already. Request a new password reset link.'
      },
      {
        title: 'Security questions',
        description: 'Guide customer through security question recovery process if they cannot remember their answers.'
      }
    ]
  },
  'payment-processing': {
    title: 'Payment Processing Issues',
    objective: 'Resolve payment processing failures and help customers complete transactions successfully',
    stats: {
      resolutionTime: '30 minutes',
      successRate: '95%',
      commonCauses: ['Insufficient funds', 'Card expired', 'Security verification']
    },
    steps: [
      {
        number: 1,
        text: 'Verify the payment details: card number, expiration date, and CVV.'
      },
      {
        number: 2,
        text: 'Check if the card is active and has sufficient funds.'
      },
      {
        number: 3,
        text: 'Verify the billing address matches the card issuer\'s records.'
      },
      {
        number: 4,
        text: 'Check for any system errors or timeouts during the transaction.'
      },
      {
        number: 5,
        text: 'Provide alternative payment methods if the issue cannot be resolved.'
      }
    ],
    commonIssues: [
      {
        title: 'Declined card',
        description: 'Check for insufficient funds, expired card, or incorrect card details.'
      },
      {
        title: 'System error',
        description: 'Check server logs and retry the transaction after a few minutes.'
      },
      {
        title: 'Timeout',
        description: 'Check network connection and retry the transaction.'
      }
    ]
  }
};

const Scenario = () => {
  const { id } = useParams<{ id: string }>();
  const scenario = scenarios[id as keyof Scenarios];
  
  if (!scenario) return <div>Scenario not found</div>;

  return (
    <ScenarioContainer>
      <ScenarioTitle>{scenario.title}</ScenarioTitle>
      <ScenarioContent>
        <SectionTitle>Objective</SectionTitle>
        <TextContent>{scenario.objective}</TextContent>

        <SectionTitle>Stats</SectionTitle>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ flex: 1 }}>
            <TextContent style={{ color: '#3b82f6', fontWeight: '600' }}>
              Resolution Time: {scenario.stats.resolutionTime}
            </TextContent>
          </div>
          <div style={{ flex: 1 }}>
            <TextContent style={{ color: '#16a34a', fontWeight: '600' }}>
              Success Rate: {scenario.stats.successRate}
            </TextContent>
          </div>
        </div>

        <SectionTitle>Common Causes</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {scenario.stats.commonCauses.map((cause: string, index: number) => (
            <span key={index} style={{
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              color: '#4b5563'
            }}>
              {cause}
            </span>
          ))}
        </div>

        <SectionTitle>Steps</SectionTitle>
        <List>
          {scenario.steps.map((step: Step) => (
            <ListItem key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepText>{step.text}</StepText>
            </ListItem>
          ))}
        </List>

        <SectionTitle>Common Issues</SectionTitle>
        <List>
          {scenario.commonIssues.map((issue: CommonIssue, index: number) => (
            <ListItem key={index}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <b>{issue.title}</b>
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {issue.description}
                  </span>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </ScenarioContent>
    </ScenarioContainer>
  );
};

export default Scenario;
