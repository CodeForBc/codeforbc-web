import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './privacy-policy.scss';

export default function PrivacyPolicy() {
  return (
    <Container className="privacy-page">
      <Box className="privacy-page__heading-container">
        <Typography className="privacy-page__heading">
          Privacy Policy
        </Typography>
        <Typography className="privacy-page__sub-heading">
          Effective Date: 2024-05-29
        </Typography>
      </Box>
      <Box className="privacy-page__content-container">
        {/* Section 1: Introduction */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            1. Introduction
          </Typography>
          <Typography className="privacy-page__text">
            CodeForBC ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your personal information when you visit our website{' '}
            <a href="https://www.codeforbc.ca">https://www.codeforbc.ca</a> and
            use our services.
          </Typography>
        </Box>

        {/* Section 2: Information We Collect */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            2. Information We Collect
          </Typography>
          <Typography className="privacy-page__text">
            We may collect personal information about you in various ways,
            including:
          </Typography>
          <Typography className="privacy-page__text">
            Personal Identification Information: Name, email address, phone
            number, and mailing address.
          </Typography>
          <Typography className="privacy-page__text">
            Technical Data: IP address, browser type, operating system, and
            website usage data collected through cookies and similar
            technologies.
          </Typography>
        </Box>

        {/* Section 3: How We Use Your Information */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            3. How We Use Your Information
          </Typography>
          <Typography className="privacy-page__text">
            We use the collected information for the following purposes:
          </Typography>
          <Typography className="privacy-page__text">
            • To provide, operate, and maintain our website and services.
            <br />
            • To improve, personalize, and expand our website and services.
            <br />
            • To communicate with you, including responding to your inquiries
            and providing updates.
            <br />
            • To process transactions and send related information.
            <br />• To comply with legal obligations and protect our rights.
          </Typography>
        </Box>

        {/* Section 4: Information Sharing and Disclosure */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            4. Information Sharing and Disclosure
          </Typography>
          <Typography className="privacy-page__text">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except as described below:
          </Typography>
          <Typography className="privacy-page__text">
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in operating our
            website, conducting our business, or providing services to you, as
            long as these parties agree to keep this information confidential.
          </Typography>
          <Typography className="privacy-page__text">
            <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law or in response to valid
            requests by public authorities (e.g., a court or government agency).
          </Typography>
        </Box>

        {/* Section 5: Data Security */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            5. Data Security
          </Typography>
          <Typography className="privacy-page__text">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            disclosure, alteration, and destruction.
          </Typography>
        </Box>

        {/* Section 6: Your Rights */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            6. Your Rights
          </Typography>
          <Typography className="privacy-page__text">
            You have the right to:
          </Typography>
          <Typography className="privacy-page__text">
            • Access and receive a copy of your personal information.
            <br />
            • Correct any inaccurate or incomplete personal information.
            <br />
            • Request the deletion of your personal information.
            <br />• Object to the processing of your personal information.
          </Typography>
          <Typography className="privacy-page__text">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:codeforbc@gmail.com">codeforbc@gmail.com</a>.
          </Typography>
        </Box>

        {/* Section 7: Cookies and Tracking Technologies */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            7. Cookies and Tracking Technologies
          </Typography>
          <Typography className="privacy-page__text">
            We use cookies and similar tracking technologies to track the
            activity on our website and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent. However, if you do not accept cookies, you may
            not be able to use some portions of our website.
          </Typography>
        </Box>

        {/* Section 8: Changes to This Privacy Policy */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">
            8. Changes to This Privacy Policy
          </Typography>
          <Typography className="privacy-page__text">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date at the top.
          </Typography>
        </Box>

        {/* Section 9: Contact Us */}
        <Box className="privacy-page__content-item">
          <Typography className="privacy-page__title">9. Contact Us</Typography>
          <Typography className="privacy-page__text">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </Typography>
          <Typography className="privacy-page__text">
            <strong>CodeForBC</strong>
            <br />
            Email: <a href="mailto:codeforbc@gmail.com">codeforbc@gmail.com</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
