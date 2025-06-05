import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  &:hover {
    border-color: #4f46e5;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;

const Home = () => {
  return (
    <>
      <PageTitle>Welcome to Support Playbook</PageTitle>
      <Grid>
        {/* Quick access cards */}
        <Card>
          <CardTitle>Most Common Issues</CardTitle>
          <CardContent>
            <ListItem>• Password Reset: Guide customers through secure password recovery with multi-factor authentication</ListItem>
            <ListItem>• Account Access: Troubleshoot login issues, account lockouts, and multi-factor authentication problems</ListItem>
            <ListItem>• Payment Processing: Resolve payment failures, system errors, and declined transactions</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Recent Updates</CardTitle>
          <CardContent>
            <ListItem>• New refund policy: Updated guidelines for faster processing and automated refund requests</ListItem>
            <ListItem>• Updated billing system: Enhanced security with tokenization and new payment options</ListItem>
            <ListItem>• Enhanced security measures: Latest updates to protect customer data with end-to-end encryption</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Quick Stats</CardTitle>
          <CardContent>
            <ListItem>• Total active cases: 124 (23% increase from last month) - 45% resolved within 1 hour</ListItem>
            <ListItem>• Average resolution time: 2.5h (down from 3.2h) - 95% SLA compliance</ListItem>
            <ListItem>• Customer satisfaction: 94% (up from 91%) - NPS score: 88</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Top Categories</CardTitle>
          <CardContent>
            <ListItem>• Account Management: 35% of cases - 98% resolution rate</ListItem>
            <ListItem>• Payment Issues: 28% of cases - 92% first-contact resolution</ListItem>
            <ListItem>• Technical Support: 22% of cases - 95% customer satisfaction</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Best Practices</CardTitle>
          <CardContent>
            <ListItem>• Always verify customer identity before proceeding - Use multi-factor authentication</ListItem>
            <ListItem>• Document all customer interactions - Maintain detailed case notes and follow-up actions</ListItem>
            <ListItem>• Follow up with customers after resolution - Send satisfaction surveys and gather feedback</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Support Resources</CardTitle>
          <CardContent>
            <ListItem>• Knowledge Base: Updated daily - Over 500 articles and guides</ListItem>
            <ListItem>• Training Materials: New modules available - Monthly training webinars</ListItem>
            <ListItem>• Team Collaboration: Enhanced tools - Real-time chat and shared documentation</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Customer Feedback</CardTitle>
          <CardContent>
            <ListItem>• "Excellent support team! Quick and professional" - Sarah M.</ListItem>
            <ListItem>• "Love the new refund policy! So much easier now" - John D.</ListItem>
            <ListItem>• "Best technical support I've ever had" - Emily R.</ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Team Performance</CardTitle>
          <CardContent>
            <ListItem>• Average response time: 4 minutes</ListItem>
            <ListItem>• First-contact resolution: 89%</ListItem>
            <ListItem>• Monthly training hours: 8 per agent</ListItem>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
