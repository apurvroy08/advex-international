import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <Box component={"div"}>
            <Box
                sx={{
                    minHeight: "150px",
                    padding: "80px 100px 40px",
                    background:
                        "linear-gradient(-45deg,rgba(147,26,222,.83),rgba(28,206,234,.82))",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 500, color: "#fff", paddingTop: "80px" }}
                    >
                        Privacy Policy
                    </Typography>
                </Container>
            </Box>
            <Container>
                <Box sx={{ paddingY: "60px", display: "flex", flexDirection: "column", gap: "50px" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Please Read the Following Carefully
                        </Typography>
                        <Typography variant='body2'>
                            Welcome to <span style={{ fontWeight: "bold" }}>Advex</span> website (the “Site”). To make this Site informative, we request all our Guests visiting our Site to adhere to our terms and conditions (“Terms and Conditions”). By accessing the Site, you (“You”) indicate your acknowledgment and acceptance of these Terms and Conditions. You are advised to kindly check them periodically for changes from time to time. Your continued use of <span style={{ fontWeight: "bold" }}>www.advexin.com</span> following the posting of changes to these Terms and Conditions will mean that You accept those changes.
                        </Typography>
                        <Typography variant='body2'>
                            While <span style={{ fontWeight: "bold" }}>Advex</span> will make every effort to maintain up-to-date and accurate information on the Site, visitors should be aware that <span style={{ fontWeight: "bold" }}>Advex</span> accepts no responsibility for the accuracy or completeness of any material contained on the Site and recommends that visitors exercise their own care, discretion and judgment with respect to its use.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Privacy Policy
                        </Typography>
                        <Typography variant='body2'>
                            <span style={{ fontWeight: "bold" }}>Advex </span>
                            Tours Pvt. Ltd. uses its best efforts to respect the privacy of its on-linevisitors.
                            <span style={{ fontWeight: "bold" }}> Advex</span> Tours Pvt. Ltd. includes its divisions and subsidiaries.
                        </Typography>
                        <Typography variant='body2'>When You visit the Site, in certain parts of the Site, we may ask You to provide us with personal information so that we can provide You with information You request. You are under no obligation to provide us with this information, but without the said information, we may not be able to provide You the information You have requested. The Site may also include certain features that allow You to communicate with us by electronic means such as email. You are responsible if You choose to use these communication features to provide personal identification information to us (such as by including Your name and/or address in the body of an e-mail message). When You provide any personal identification information to us, You affirm that You are knowingly and voluntarily providing us the information. We may respond to the electronic communication messages You send us. The use of cookies and other information is used to optimize the viewing experience, troubleshoot any problems and better serve content.
                        </Typography>
                        <Typography variant='body2'>We work to ensure that the personal identification information You do intentionally provide us remains private. We will not sell, rent, or trade the personal identification information You provide to anyone outside <span style={{ fontWeight: "bold" }}>Advex</span> , unless we are required to do so by law. Please be aware, however, that it may be possible for others to read messages that You send over the Internet, you are therefore advised not to send any such information by electronic communication that You would like to keep confidential.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Intellectual Property Notice And Restrictions On Use Of Materials
                        </Typography>
                        <Typography variant="body2">
                            This Site is owned and operated by <span style={{ fontWeight: "bold" }}>Advex</span> Tours Private
                            Limited and features trademarks, copyrights and other intellectual
                            property which are the property of <span style={{ fontWeight: "bold" }}>Advex</span> Tours Private
                            Limited, its divisions, affiliates or subsidiaries. You agree that
                            You will not display the <span style={{ fontWeight: "bold" }}>Advex</span> Marks or other third party
                            trademarks, or use the <span style={{ fontWeight: "bold" }}>Advex</span> Marks or other third party
                            trademarks in any manner, without the prior written permission of &nbsp;
                            <span style={{ fontWeight: "bold" }}>Advex</span> or the respective owners of other third party
                            marks.
                        </Typography>
                        <Typography variant='body2'>
                            This Site may also contain trademarks, copyrights and other
                            intellectual property rights of third parties, including our
                            clients. All such rights are proprietary to their respective
                            owners. Users are prohibited by law and these conditions from
                            modifying, copying, distributing, transmitting, displaying,
                            publishing, selling, licensing, creating derivative works or using
                            any content on this Site for commercial or public purposes in any
                            way or in any manner or medium.
                        </Typography>
                        <Typography variant='body2'>
                            Unauthorized use of this web site
                            and system including but not limited to unauthorized entry, misuse
                            of passwords, or misuse of any information posted on this site is
                            strictly prohibited and would attract both penal and punitive
                            action.
                            Except as specifically permitted in accordance with the Terms and
                            Conditions governing use of this Site, any use of <span style={{ fontWeight: "bold" }}>Advex</span>’s
                            or other third party trademarks or trade names found on the Site
                            is strictly prohibited without the express written permission of
                            their respective owners.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Disclaimer Of Warranties And Liability
                        </Typography>
                        <Typography variant="body2">
                            The contents of the Site are provided on an as is basis without
                            warranties of any kind. <span style={{ fontWeight: "bold" }}>Advex</span> cannot be held responsible
                            or reliable –
                        </Typography>
                        <Typography variant="body2">
                            As to the accuracy, correctness, reliability, currentness,
                            timeliness, non-infringement, title, merchantability or fitness
                            for any particular purpose of the contents of the Site; the
                            contents available through the Site or any functions associated
                            therewith will be uninterrupted or error-free, or that defects
                            will be corrected or that the Site and the server is and will be
                            free of all viruses and/or other harmful elements.
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Advex</span> shall also not be liable for any damage or loss of
                            any kind, howsoever caused as a result <span style={{ fontWeight: "bold" }}>(direct or indirect)</span>  of the
                            use of the Site, including but not limited to any damage or loss
                            suffered as a result of reliance on the contents contained in or
                            available from the Site.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Third Party Advertisements
                        </Typography>
                        <Typography variant="body2">
                            Please note that third parties advertise on our Site. We do not
                            share any of your personal Information with these third party
                            advertisers unless you give us permission, in writing to do so.
                            These advertisers may seek to use cookies and pixel tags to track
                            Session Data about the ads you have seen and types of things in
                            which you appear interested. These advertisers may also use
                            combined information about your visits to our Site and other sites
                            in order to provide advertisements about related goods and
                            services that may be of interest to you.
                        </Typography>
                        <Typography variant="body2">
                            When you click on one of these advertisers links, you are leaving
                            our Site and entering another site. We are not responsible for
                            such third party sites. You should carefully review the privacy
                            statements of any other site you visit, because those privacy
                            statements will apply to your visit to that site, and may be very
                            different from our policy.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Links
                        </Typography>
                        <Typography variant="body2">
                            This Site may include links to other websites operated by parties
                            other than <span style={{ fontWeight: "bold" }}>Advex</span>. <span style={{ fontWeight: "bold" }}>Advex</span> is not responsible and
                            assumes no responsibility for the contents of any
                            non- <span style={{ fontWeight: "bold" }}>Advex</span> linked Internet website, or for any potential
                            damage arising out of or in connection with the use of any such
                            link. The Internet websites to which links are provided in this
                            Site are not under the control of <span style={{ fontWeight: "bold" }}>Advex</span>. Access to any
                            other Internet sites linked to the Site is entirely at the user
                            own risk.
                        </Typography>
                        <Typography variant="body2">
                            All links to other web sites are provided as a convenience to the
                            user of the Site. In no circumstances shall <span style={{ fontWeight: "bold" }}>Advex</span> be considered to be associated or affiliated in whatever manner with
                            any trade or service marks, logos, insignia or other devices used
                            or appearing on web sites to which the Site is linked and shall
                            not be held responsible in any manner whatsoever for use of the
                            said web sites.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Logos, Concepts, Ideas
                        </Typography>
                        <Typography variant="body2">
                            We exclusively develop our logos, concepts and ideas for use in
                            advertising, promotion, public relations and whatever else is
                            appropriate to promote the products and services of our guests.
                            You are not supposed to misuse, steal any of our creations, logos,
                            and also not use any of our creations appearing on the Site for
                            any purposes, otherwise the act may attract penal action.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Termination
                        </Typography>
                        <Typography variant="body2">
                            These Terms and Conditions remain in effect for all use made of
                            this Site unless specifically terminated by <span style={{ fontWeight: "bold" }}>Advex</span>.
                            <span style={{ fontWeight: "bold" }}> Advex</span> may amend or terminate these Terms and Conditions
                            at any time for any reason, with or without notice. Upon
                            termination, You must destroy all materials obtained from this
                            Site and all copies made thereof.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Changes To This Privacy Policy
                        </Typography>
                        <Typography variant="body2">
                            Please note that this privacy policy may change from time to time.
                            If we make material changes that will affect personal information
                            we have already collected from You, we will make reasonable
                            efforts to notify You of the changes and to give You the
                            opportunity to amend or cancel your registration.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Miscellaneous
                        </Typography>
                        <Typography variant="body2">
                            These Terms and Conditions shall be governed by and construed in
                            accordance with Law of India, regardless of where the user is
                            based. You agree that any action at law or in equity arising out
                            of or relating to these Terms and Conditions shall be filed only
                            in the courts at Mumbai, and You hereby consent and submit to the
                            personal jurisdiction of such courts for the purposes of
                            litigating any such action. If any provision of these Terms and
                            Conditions shall be unlawful, void, or for any reason
                            unenforceable, then that provision shall be deemed severable from
                            these Terms and Conditions and shall not affect the validity and
                            enforceability of any remaining provisions. <span style={{ fontWeight: "bold" }}>Advex</span> can
                            revise these Terms and Conditions at any time by updating this
                            posting. <span style={{ fontWeight: "bold" }}>Advex</span> may be contacted by writing or emailing:
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Advex</span> International Travel Wizards Pvt. Ltd.
                        </Typography>
                        <Typography variant="body2">
                            #24, DDA Market, A1 Block,


                        </Typography>
                        <Typography variant="body2">
                            Safdarjung enclave, New Delhi - 110029
                        </Typography>
                        <Typography variant="body2">
                            <Link underline="none" color="#000" fontWeight="600">
                                info@advexin.com
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}

export default page