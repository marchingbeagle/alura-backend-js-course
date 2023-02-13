function linkExtract(list) {
  return list.map((Element) => Object.values(Element).join());
}

async function statusCheck(urlList) {
  const arrStatus = await Promise.all(
    urlList.map(async (Element) => {
      try {
        const response = await fetch(urlList);
        return response.status;
      } catch (error) {
        threatError(error);
      }
    })
  );
  return arrStatus;
}

export default async function validateList(list) {
  const urlList = linkExtract(list);
  const status = await statusCheck(urlList);
  return list.map((Element, index) => ({
    ...Element,
    Status: status[index],
  }));
}

function threatError(error) {
  if (error.cause.code === "ENOTFOUND") {
    return "Url could not be reached";
  } else {
    ("Something went wrong");
  }
}
