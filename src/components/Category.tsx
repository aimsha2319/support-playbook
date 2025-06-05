import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

interface Scenario {
  id: string;
  title: string;
  description: string;
  stats: {
    resolutionTime: string;
    successRate: string;
    commonCauses: string[];
  };
  relatedTopics: string[];
}

interface CategoryScenarios {
  [key: string]: Scenario[];
}

const CategoryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const ScenariosList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ScenarioCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: all 0.2s;
  
  &:hover {
    border-color: #4f46e5;
  }
`;

const ScenarioTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const ScenarioDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ViewDetailsButton = styled.button`
  display: inline-block;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    background: #4338ca;
  }
`;

const scenarios: CategoryScenarios = {
  'account-management': [
    {
      id: '1',
      title: 'Password Reset Process',
      description: 'Guide users through the password reset process',
      stats: {
        resolutionTime: '5 minutes',
        successRate: '95%',
        commonCauses: ['Forgot password', 'Locked account', 'Browser issues']
      },
      relatedTopics: ['Security', 'Account Access']
    },
    {
      id: '2',
      title: 'Account Deactivation',
      description: 'Process for deactivating user accounts',
      stats: {
        resolutionTime: '10 minutes',
        successRate: '98%',
        commonCauses: ['Leaving service', 'Billing issues', 'Privacy concerns']
      },
      relatedTopics: ['Account Settings', 'Privacy']
    }
  ],
  'technical-issues': [
    {
      id: '3',
      title: 'Slow App Performance',
      description: 'Troubleshooting slow application performance',
      stats: {
        resolutionTime: '15 minutes',
        successRate: '85%',
        commonCauses: ['Network issues', 'Device limitations', 'Resource constraints']
      },
      relatedTopics: ['Performance', 'Troubleshooting']
    },
    {
      id: '4',
      title: 'Login Issues',
      description: 'Troubleshooting login issues',
      stats: {
        resolutionTime: '20 minutes',
        successRate: '97%',
        commonCauses: ['Locked account', 'Multi-factor authentication', 'Password reset']
      },
      relatedTopics: ['Security', 'Authentication', 'Password Management']
    }
  ],
  'billing': [
    {
      id: 'payment-processing',
      title: 'Payment Processing Issues',
      description: 'Common issues and solutions for payment processing failures. Covers declined cards, insufficient funds, and system errors.',
      stats: {
        resolutionTime: '30 minutes',
        successRate: '95%',
        commonCauses: ['Insufficient funds', 'Card expired', 'Security verification']
      },
      relatedTopics: ['Billing', 'Transactions', 'Payment Methods']
    },
    {
      id: 'refund-process',
      title: 'Refund Process',
      description: 'Guide for processing refunds and handling refund requests. Includes verification steps and documentation requirements.',
      stats: {
        resolutionTime: '45 minutes',
        successRate: '96%',
        commonCauses: ['Invalid request', 'Missing documentation', 'System errors']
      },
      relatedTopics: ['Billing', 'Finance', 'Customer Service']
    }
  ],
  'product-features': [
    {
      id: 'feature-activation',
      title: 'Feature Activation',
      description: 'Guide for activating and managing product features. Includes license keys and activation codes.',
      stats: {
        resolutionTime: '25 minutes',
        successRate: '98%',
        commonCauses: ['Invalid license', 'Expired trial', 'System errors']
      },
      relatedTopics: ['Product', 'Features', 'Activation']
    },
    {
      id: 'feature-upgrade',
      title: 'Feature Upgrade Process',
      description: 'Guide for upgrading product features and managing subscriptions.',
      stats: {
        resolutionTime: '30 minutes',
        successRate: '97%',
        commonCauses: ['Incompatible versions', 'System requirements', 'Payment issues']
      },
      relatedTopics: ['Product', 'Subscriptions', 'Upgrades']
    }
  ],
  'shipping': [
    {
      id: 'shipping-delays',
      title: 'Shipping Delays',
      description: 'Guide for handling shipping delays and tracking issues.',
      stats: {
        resolutionTime: '45 minutes',
        successRate: '95%',
        commonCauses: ['Carrier delays', 'Customs issues', 'Weather conditions']
      },
      relatedTopics: ['Shipping', 'Logistics', 'Delivery']
    },
    {
      id: 'return-process',
      title: 'Return Process',
      description: 'Guide for processing returns and handling return requests.',
      stats: {
        resolutionTime: '30 minutes',
        successRate: '96%',
        commonCauses: ['Missing items', 'Damaged products', 'Wrong items']
      },
      relatedTopics: ['Returns', 'Shipping', 'Customer Service']
    }
  ]
};

interface CategoryProps {
  slug: string;
}

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryScenarios = scenarios[slug as keyof CategoryScenarios];

  if (!slug || !categoryScenarios) {
    return (
      <CategoryContainer>
        <CategoryTitle>Category Not Found</CategoryTitle>
        <p style={{ color: '#4b5563' }}>Please select a valid category from the sidebar.</p>
      </CategoryContainer>
    );
  }

  return (
    <CategoryContainer>
      <CategoryTitle>{slug.replace('-', ' ').charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}</CategoryTitle>
      <ScenariosList>
        {categoryScenarios.map((scenario: Scenario) => (
          <Link to={`/scenario/${scenario.id}`} key={scenario.id}>
            <ScenarioCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <ScenarioTitle>{scenario.title}</ScenarioTitle>
                  <ScenarioDescription>{scenario.description}</ScenarioDescription>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    Resolution Time: {scenario.stats.resolutionTime}
                  </p>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                    Success Rate: {scenario.stats.successRate}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
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
              <ViewDetailsButton>View Details</ViewDetailsButton>
            </ScenarioCard>
          </Link>
        ))}
      </ScenariosList>
    </CategoryContainer>
  );
};

export default Category;
