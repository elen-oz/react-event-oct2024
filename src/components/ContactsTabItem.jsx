import { Typography, List, ListItem, Box, Stack } from '@mui/material';

function ContactsTabItem({ userInfo }) {
  return (
    <Stack
      sx={{
        height: '982px',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '260px',
          height: '334px',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          m: 0,
          p: 0,
          pt: 0,
        }}
      >
        <Stack
          sx={{
            m: 0,
            p: 0,
            height: '62px',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'Normal',
              textAlign: 'left',
              height: '32px',
            }}
          >
            E-mail
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 'Normal',
              letterSpacing: '0.17000000178813934px',
              textAlign: 'left',
              height: '20x',
            }}
          >
            {/* {userInfo.email} */}
            userInfo.email
          </Typography>
        </Stack>
        <Box
          sx={{
            height: '62px',
            marginTop: '30px',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'Normal',
              letterSpacing: '0.15000000596046448px',
              textAlign: 'left',
              marginBottom: '10px',
              height: '32px',
            }}
          >
            Телефон
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 'Normal',
              letterSpacing: '0.17000000178813934px',
              textAlign: 'left',
              height: '20px',
            }}
          >
            {/* {userInfo.telephone} */}
            userInfo.telephone
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '62px',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'Normal',
              letterSpacing: '0.15000000596046448px',
              textAlign: 'left',
              height: '32px',
              marginTop: '30px',
            }}
          >
            Социальные сети
          </Typography>

          <List
            sx={{
              height: '108px',
            }}
          >
            <ListItem
              sx={{
                height: '36px',
                m: 0,
                p: 0,
              }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '24px',
                }}
              >
                <img src="src/assets/vk.jpg" alt="Значок ВК" style={{ height: '24px' }} />
                <Typography
                  sx={{
                    fontSize: '20px',
                    letterSpacing: '0.15000000596046448px',
                    textAlign: 'left',
                    height: '32px',
                    marginLeft: '32px',
                  }}
                >
                  Vkontakte
                </Typography>
              </a>
            </ListItem>

            <ListItem
              sx={{
                height: '36px',
                m: 0,
                p: 0,
              }}
            >
              {/* <a href={userInfo.socials.telegram} style={{ display: "flex", alignItems: "center" }}> */}
              <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="src/assets/telegram.png" alt="Значок ТГ" style={{ height: '24px' }} />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    letterSpacing: '0.15000000596046448px',
                    textAlign: 'left',
                    marginLeft: '32px',
                    height: '32px',
                  }}
                >
                  Telegram
                </Typography>
              </a>
            </ListItem>

            <ListItem
              sx={{
                height: '36px',
                m: 0,
                p: 0,
              }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '24px',
                }}
              >
                <img
                  src="src/assets/whatsapp.png"
                  alt="Значок Ватсапп"
                  style={{ height: '24px' }}
                />
                <Typography
                  sx={{
                    fontSize: '20px',
                    letterSpacing: '0.15000000596046448px',
                    textAlign: 'left',
                    marginLeft: '32px',
                    height: '32px',
                  }}
                >
                  WhatsApp
                </Typography>
              </a>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ContactsTabItem;
