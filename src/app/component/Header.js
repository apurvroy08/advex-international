"use client";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import logoimg from "../assets/inddesimgs/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import GroupTour from "./GroupTour";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import SpecialityTour from "./SpecialityTour";
import CloseIcon from '@mui/icons-material/Close';
import More from "./More";
import Drawer from '@mui/material/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectAllDestinations } from "@/redux/selectors";

const Header = () => {

  const router = useRouter();
  const AllDestinations = useSelector(selectAllDestinations);
  const indian = AllDestinations.filter(
    (val) =>
      val.fields.categoryId.fields.uid === "TRENDING-INDIAN-DESTINATION-100"
  );
  const international = AllDestinations.filter(
    (val) =>
      val.fields.categoryId.fields.uid ===
      "TRENDING-INTERNATIONAL-DESTINATION-100"
  );

  const advexSpecial = AllDestinations.filter(
    (val) => val.fields.categoryId.fields.uid === "ADVEX-SPECIAL-100"
  );

  const handleClickIndian = (data) => {
    router.push(
      `/${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`
    );
  };

  const handleClickInternational = (data) => {
    router.push(
      `/${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`
    );
  };

  const handleClickAdvexSpecial = (data) => {
    router.push(
      `/${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`
    );
  };

  const [menuIcon, setMenuIcon] = useState(true);
  const [menuBox, setMenuBox] = useState(false);
  const [closeMenuIcon, setCloseMenuIcon] = useState(false);
  const [activeItem, setActiveItem] = useState('Overview');
  // const router = useRouter();

  const [modalType, setModalType] = useState("");

  const [groupModal, setGroupModal] = useState(false);
  const handleGroupOpenModal = () => {
    setGroupModal(true);
  };
  const handleGroupCloseModal = () => {
    setGroupModal(false);
  };

  // speciality modal state
  const [specialityModal, setSpecialityModal] = useState(false);
  const handleSpecialityOpenModal = () => {
    setSpecialityModal(true);
  };

  const handleSpecialityCloseModal = () => {
    setSpecialityModal(false);
  };

  const handleModalType = (type) => {
    setModalType(type);
  };

  // more modal
  const [moreModal, setMoreModal] = useState(false);
  const handleMoreModalOpen = () => {
    setMoreModal(true);
  };

  const handleMoreModalClose = () => {
    setMoreModal(false);
  };


  const handleMenuClick = () => {
    // setMenuIcon(true);
    toggleDrawer();
    setMenuBox(true);
    setCloseMenuIcon(true);

  };
  const handleCloseIconClick = () => {
    setMenuBox(false);
    setCloseMenuIcon(false);
    setMenuIcon(true)
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        boxShadow: "-5px -1px 5px 0px #989fa2"
      }}
    >
      <Container>
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px"
        }}>
          <Link href="/" aria-label="Go to homepage" >
            <Image
              src={logoimg}
              alt=""
              style={{
                maxWidth: "200px",
                height: "80px",
                aspectRatio: "10/9",
                margin: "8px 0",
              }}
            />
          </Link>
          {menuIcon && (<Box
            sx={{
              display: { xs: "flex", md: "none" },
              height: { xs: "33px", sm: "36px" },
              width: { xs: "38px", sm: "42px" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuIcon
              fontSize="large"
              sx={{ color: "#000" }}
              onClick={handleMenuClick}
            />
          </Box>)}
          {/* {closeMenuIcon && (<Box
            sx={{
              display: { xs: "flex", md: "none" },
              height: { xs: "33px", sm: "36px" },
              width: { xs: "38px", sm: "42px" },
              borderRadius: "2px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CloseIcon
              fontSize="large"
              sx={{ color: "#000" }}
              onClick={handleCloseIconClick}
            />
          </Box>)} */}
          {menuBox && (<Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box sx={{ width: { xs: 375, sm: 550 } }} onClick={toggleDrawer}>
              {closeMenuIcon && (<Box
                sx={{
                  height: { xs: "33px", sm: "36px" },
                  width: { xs: "38px", sm: "42px" },
                  borderRadius: "2px",
                  // bgcolor: "red",
                  padding: "10px"
                  // position: "fixed",
                  // right: 0
                }}
              >
                <CloseIcon
                  fontSize="large"
                  sx={{ color: "#000" }}
                  onClick={handleCloseIconClick}
                />
              </Box>)}
              <Box>
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Group Tours
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: "0px 10px" }}>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Indian
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {indian.map((item, index) => (
                            <ListItem
                              onClick={() => {
                                handleClickIndian(item);
                              }}
                              key={index}
                              sx={{
                                width: "186px",
                                paddingX: "0px",
                                color: "#111111",
                              }}
                            >
                              {item.fields.title}
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        onClick={(event) => event.stopPropagation()}
                      >
                        International
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {international.map((item, index) => (
                            <ListItem
                              onClick={() => { handleClickInternational(item) }}
                              key={index}
                              sx={{ width: "186px", paddingX: "0px", color: "#111111" }}
                            >
                              {item.fields.title}
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Speciality Tour
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: "0px 10px" }}>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Advex Special
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {advexSpecial.map((item, index) => (
                            <ListItem
                              onClick={() => {
                                handleClickAdvexSpecial(item);
                              }}
                              key={index}
                              sx={{
                                width: "186px",
                                paddingX: "0px",
                                color: "#111111",
                              }}
                            >
                              {item.fields.title}
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    onClick={(event) => event.stopPropagation()}
                  >
                    More
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>Contact</ListItem>
                      <ListItem>Career</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Drawer>)}

          {menuBox && ("")}
          <Stack
            direction="row"
            sx={{
              gap: { md: "10px", lg: "20px" },
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              // onClick={handleOpenModal}
              sx={{
                cursor: "pointer",
                color: "rgba(0, 0, 0, 0.9)",
                fontWeight: "600",
              }}
              onClick={() => {
                if (groupModal && modalType === "group") {
                  handleGroupCloseModal();
                } else {
                  handleGroupOpenModal();
                  handleSpecialityCloseModal();
                  handleMoreModalClose();
                  handleModalType("group");
                }
              }}
            >
              Group Tours
              {/* <IconButton onClick={groupModal && modalType === 'group' ? handleGroupCloseModal : handleGroupOpenModal} >
                {groupModal ? <KeyboardControlKeyIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
              </IconButton> */}
              <IconButton >
                {groupModal ? (
                  <KeyboardControlKeyIcon fontSize="small" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="small" />
                )}
              </IconButton>
            </Button>

            <Button
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}
              onClick={() => {
                if (specialityModal && modalType === "speciality") {
                  handleSpecialityCloseModal();
                } else {
                  handleSpecialityOpenModal();
                  handleGroupCloseModal();
                  handleMoreModalClose();
                  handleModalType("speciality");
                }
              }}
            >
              Speciality Tours
              <IconButton>
                {specialityModal ? (
                  <KeyboardControlKeyIcon fontSize="small" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="small" />
                )}
              </IconButton>
            </Button>

            <Button
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}

              onClick={() => {
                if (moreModal && modalType === "more") {
                  handleMoreModalClose();
                } else {
                  handleMoreModalOpen();
                  handleGroupCloseModal();
                  handleSpecialityCloseModal();
                  handleModalType("more");
                }
              }}
            >
              More
              <IconButton>
                {moreModal ? (
                  <KeyboardControlKeyIcon fontSize="small" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="small" />
                )}{" "}
                {/* Conditional rendering for icon */}
              </IconButton>
            </Button>
          </Stack>
          {/* </Box> */}
        </Toolbar>
      </Container >
      <GroupTour open={groupModal} onClose={handleGroupCloseModal} />
      <SpecialityTour open={specialityModal} onClose={handleSpecialityCloseModal} />
      <More open={moreModal} />
    </AppBar >
  );
};

export default Header;
