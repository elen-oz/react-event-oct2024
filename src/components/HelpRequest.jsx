import { Typography, Box, Stack, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function HelpRequest() {
  return (
    <Paper sx={{ width: '750px', backgroundColor: 'white' }}>
      <Box sx={{ width: '550px', backgroundColor: 'white', pl: '20px', pt: '20px', pb: '20px' }}>
        <Typography variant="h5" sx={{ fontSize: '24px', mb: 3 }}>
          Сбор средств для пенсионерки Ангелины Ивановны
        </Typography>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
            Организация
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Фонд помощи для ветеранов и инвалидов "Вера"
          </Typography>
        </Stack>
        <Stack direction="row">
          <VerifiedIcon color="primary" />
          <Typography variant="caption" sx={{ mb: 3 }}>
            Организация проверена
          </Typography>
        </Stack>

        <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
          Кому мы помогаем
        </Typography>
        <Stack>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Мы помогаем пенсионерке Ангелине Инвановне. Ей 82 года, и, к сожалению, её здоровье в
            последние годы значительно ухудшилось. Она страдает от нескольких хронических
            заболеваний, таких как диабет и гипертония, и нуждается в постоянном лечении и уходе.
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Бабушка всю жизнь работала на заводе, воспитывала детей и помогала внукам, но сейчас,
            когда она вышла на пенсию, её маленькая пенсия не покрывает даже основных расходов на
            лекарства. Каждый месяц она тратит значительную часть своей пенсии на медикаменты,
            которые необходимы для поддержания её здоровья.
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            К сожалению, многие препараты являются довольно дорогими, и бабушка часто вынуждена
            экономить, отказываясь от необходимых лекарств. Кроме того, Ангелина Инвановна нуждается
            в уходе на дому. Из-за слабости и проблем с передвижением ей трудно справляться с
            повседневными делами.
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
            Цель сбора
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний сезон. Пополнить
            запасы лекарств на три месяца. Обеспечить уход на дому в течении полугода.
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
            План действий
          </Typography>
          <Stack direction="row" gap={2}>
            <CheckCircleOutlineIcon />
            <Typography variant="body2" sx={{ mb: 1 }}>
              Оплатить лечение МКБ в клинике “Здоровье”
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <CheckCircleOutlineIcon />
            <Typography variant="body2" sx={{ mb: 1 }}>
              Провести диагностику онкологических заболеваний
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <CheckCircleOutlineIcon />
            <Typography variant="body2" sx={{ mb: 1 }}>
              Купить одежду на зимний сезон
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <CheckCircleOutlineIcon color="success" />
            <Typography variant="body2" sx={{ mb: 1 }}>
              Обеспечить уход на дому в течении полугода
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <CheckCircleOutlineIcon color="success" />
            <Typography variant="body2" sx={{ mb: 3 }}>
              Восполнить необходимые лекарства
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
            Завершение
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            20.03.2025
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mb: 1 }}>
            Локация:{' '}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Область:
            </Typography>
            <Typography variant="body2">Владимирская</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Насленный пункт:
            </Typography>
            <Typography variant="body2">Владимир</Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="h6" sx={{ fontSize: '20px', mt: 3, mb: 3 }}>
            Контакты
          </Typography>
          <Stack direction="row" gap={6}>
            <Stack direction="column">
              <Typography variant="subtitle2">Телефон</Typography>
              <Typography variant="body2">+ 7 999 888 99 50</Typography>
            </Stack>
            <Stack direction="column">
              <Typography variant="subtitle2">E-mail</Typography>
              <Typography variant="body2">forExample2@yandex.ru</Typography>
            </Stack>
            <Stack direction="column">
              <Typography variant="subtitle2">Сайт</Typography>
              <Typography variant="body2">forexamplehelp.ru</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}

export default HelpRequest;
