<template>
  <div class="review-container" @click="toggle = !toggle" title="클릭하면 이 리뷰를 자세히 볼 수 있어요">
    <div class="twice content hidden">
      <div class="title hidden" :class="{'mine' : ustore.User?.id == dynamicProps.userId}">{{ dynamicProps.reviewTitle }}</div>
      <div :class="{ 'dd': toggle, 'nowrap':!toggle, 'hidden': !toggle }">{{ dynamicProps.reviewContent }}</div>
    </div>
    <div class="content hidden">
      <div class="nowrap">
        {{ dynamicProps.userId }}
        <div v-if="ustore.User?.id == dynamicProps.userId">ME</div>
      </div>
    </div>
    <div class="nowrap">{{ dynamicProps.reviewDate.slice(0, 10) }}</div>
    <div v-if="toggle"></div>
    <div class="btn-box" v-if="toggle && ustore.User?.id == dynamicProps.userId">
      <button @click.stop="check(1, dynamicProps.reviewId, dynamicProps.reviewTitle, dynamicProps.reviewContent,dynamicProps.productId)"
        class="button nowrap upd" title="클릭하면 이 리뷰를 수정할 수 있어요">수정</button>
      <button @click.stop="check(2, dynamicProps.reviewId)" class="button nowrap del" title="클릭하면 이 리뷰를 지울 수 있어요">삭제</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../../stores/user';
import { useReviewStore } from '../../stores/review';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2/src/sweetalert2.js'

const route = useRoute();
const toggle = ref(false);
const ustore = useUserStore();
const store = useReviewStore();

defineProps({
  dynamicProps: Object,
})

onMounted(() => {

})

const check = (s, data, t, content,pid) => {
  if (sessionStorage.getItem('token') ?? false) {
    if (s == 1) {
      updated(data,t, content,pid);
    } else {
      deletereview(data);
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "로그인이 필요한 기능입니다.",
      text: "로그인 하시고 이용해주세요!",
      confirmButtonColor: 'rgb(74,199,213)',
    });
  }
}

const updated = (async (id, t, content,pid) => {
  const { value: formValues } = await Swal.fire({
    title: "리뷰 수정",
    html: `
    <div class="c">
      <label for="title">리뷰 제목</label>
      <input id="title" value="${t}" placeholder="제목을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="content">리뷰 내용</label>
      <textarea Placeholder="내용을 입력해주세요" id="content" class="swal2-textarea">${content}</textarea>
    </div>
    `,
    width: '800px',
    grow: 'row',
    focusConfirm: false,
    confirmButtonColor: 'rgb(74,199,213)',
    preConfirm: () => {
      if (!document.getElementById("title").value) {
        Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 문의 제목을 작성해주세요')
      } else if (!document.getElementById("content").value) {
        Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 내용이 있어야져;')
      }
      return {
        reviewTitle: document.getElementById("title").value,
        reviewContent: document.getElementById("content").value,
        userId: localStorage.getItem("User"),
        reviewId : id,
        productId: pid,
        reviewDelete: 'N',
        reviewStar: 0,
        type: 'R',
        reviewDate: ''
      };
    }
  });
  if (formValues) {
    store.updateReview(formValues);
  }
})

function deletereview(id) {
  Swal.fire({
    title: "리뷰를 삭제할까요?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "삭제",
    cancelButtonText: "취소",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      store.removeReview(id);
    }
  });
}

</script>

<style scoped>
/* 버튼 */
.button {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 30px;
}

.del {
  background-color: crimson;
}

.upd {
  background-color: yellowgreen;
}

.btn-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap:5px;
}

/* 내꺼 표식 */

.mine {
  color : rgb(199, 160, 121);
}

.dd {
  white-space: normal;
  word-break: break-all;
}

.review-container {
  width: 90%;
  padding: 1em;
  border: 1px solid rgb(0, 0, 0, 0.2);
  transition: all .1s cubic-bezier(0, 0, .5, 1);
  display: grid;
  grid-template-columns: 3fr 0.5fr 0.5fr;
  gap: 1em;
}

.twice {
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.twice * {
  transition: 0.2s;
}

.review-container:hover {
  background-color: #eee;
  cursor: pointer;
}

.title {
  font-weight: 600;
  font-size: 17px;
}

.hidden {
  overflow: hidden;
  text-overflow: ellipsis;
}

.nowrap {
  white-space: nowrap;
}

@media (max-width:768px) {
  .btn-box {
  flex-direction: row;
}}
</style>